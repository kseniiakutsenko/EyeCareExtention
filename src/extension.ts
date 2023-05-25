import * as vscode from 'vscode';

let interval : NodeJS.Timer;

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "eyecare" is now active!');
    
	let disposable = vscode.commands.registerCommand('eyecare.start', () => {
        if(interval !== undefined){
            clearInterval(interval);
        }
        const intervalTime = vscode.workspace.getConfiguration('eyecare').get('interval') as number * 1000 * 60;
        interval = setInterval(() => {
            vscode.window.showWarningMessage('ЗРОБИ ГІМНАСТИКУ ДЛЯ ОЧЕЙ, БО ОСЛІПНЕШ!');
        }, intervalTime);  
	});

    let disposable2 = vscode.commands.registerCommand('eyecare.stop', () => {
        if(interval !== undefined){
            clearInterval(interval);
        }
    });

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}
export function deactivate() {}
