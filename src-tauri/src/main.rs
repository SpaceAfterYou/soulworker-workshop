#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use serde::Serialize;
use std::{io::Cursor, ops::Not, path::Path, vec};
use tauri::Manager;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub enum CommandError {
    UrlCantDownload,
    UrlCantGetBuffer,
    PathNotExists,
    PathIsNotDir,
    ZipCantExtract,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CommandErrorResult {
    status: bool,
    code: CommandError,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CommandInstallPluginResult {
    status: bool,
    files: Vec<String>,
}

pub type CommandResult<T> = Result<T, CommandErrorResult>;

#[tauri::command]
async fn on_install_plugin(url: String, dir: String) -> CommandResult<CommandInstallPluginResult> {
    let response = reqwest::get(url).await;
    if response.is_err() {
        return Err(CommandErrorResult {
            code: CommandError::UrlCantDownload,
            status: false,
        });
    }

    let buffer = response.unwrap().bytes().await;
    if buffer.is_err() {
        return Err(CommandErrorResult {
            code: CommandError::UrlCantGetBuffer,
            status: false,
        });
    }

    let path = Path::new(&dir);
    if path.exists().not() {
        return Err(CommandErrorResult {
            code: CommandError::PathNotExists,
            status: false,
        });
    }

    if path.is_dir().not() {
        return Err(CommandErrorResult {
            code: CommandError::PathIsNotDir,
            status: false,
        });
    }

    let cursor = Cursor::new(buffer.unwrap());

    let mut a = zip::ZipArchive::new(cursor).unwrap();

    if a.extract(path).is_err() {
        return Err(CommandErrorResult {
            code: CommandError::ZipCantExtract,
            status: false,
        });
    }

    return Ok(CommandInstallPluginResult {
        files: a
            .file_names()
            .filter(|p| p.ends_with('/').not())
            .map(|v| v.to_string())
            .collect(),
        status: true,
    });
}

fn main() {
    let ctx = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![on_install_plugin])
        .setup(|_app| {
            #[cfg(debug_assertions)]
            {
                let main_window = _app.get_window("main").unwrap();
                main_window.open_devtools();
            }
            Ok(())
        })
        .run(ctx)
        .expect("error while running tauri application");
}
