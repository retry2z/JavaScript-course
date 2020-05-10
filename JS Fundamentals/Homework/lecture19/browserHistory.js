function browserHistory(browser, actions) {
    for (token of actions) {
        if (token.includes('Open')) {
            const siteName = token.split('Open ')[1];
            browser['Open Tabs'].push(siteName);
            browser['Browser Logs'].push(token);

        } else if (token.includes('Close')) {
            const siteName = token.split('Close ')[1];
            const siteCheck = browser['Open Tabs'].indexOf(siteName);
            if (siteCheck >= 0) {
                browser['Open Tabs'].splice(siteCheck,1);
                browser['Browser Logs'].push(token);
                browser['Recently Closed'].push(siteName);
            }
        } else {
            browser['Browser Logs'] = [];
            browser['Recently Closed'] = [];
            browser['Open Tabs'] = [];
        }
    }
    console.log(browser['Browser Name']);
    console.log('Open Tabs: ' + browser['Open Tabs'].join(', '));
    console.log('Recently Closed: ' + browser['Recently Closed'].join(', '));
    console.log('Browser Logs: ' + browser['Browser Logs'].join(', '));
}

browserHistory({"Browser Name":"Mozilla Firefox",
        "Open Tabs":["YouTube"],
        "Recently Closed":["Gmail", "Dropbox"],
        "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

);