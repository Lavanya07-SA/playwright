# SELENIUM METHODS:

# 

|01|get()|• What: Opens a new web page in the browser.<br />• Why: To load the website you want to test.<br />• Where: Called directly on the WebDriver instance (driver.get("url")).<br />• When: At the very beginning of your test script.|
|-|-|-|
|02|getTitle()|• What: Fetches the text title of the current webpage.<br />• Why: To verify you landed on the correct page.<br />• Where: Called on the WebDriver instance.<br />• When: Right after loading a page to validate it.|
|03|getCurrentUrl()|• What: Retrieves the exact URL string of the current webpage.<br />• Why: To confirm redirects or ensure correct URL path routing.<br />• Where: Called on the WebDriver instance.<br />• When: After actions like clicking links or submitting forms.|
|04|close()|• What: Closes the currently active browser window.<br />• Why: To clean up and release system memory.<br />• Where: Called on the WebDriver instance.<br />• When: At the end of a single-window test case.|
|05|manage()|• What: Accesses browser settings, cookies, and window options.<br />• Why: To configure the browser environment before testing.<br />• Where: Called on the WebDriver instance.<br />• When: During the initial setup phase of your test.|
|06|window()|• What: Focuses specifically on the browser window control options.<br />• Why: To change window size, position, or full-screen settings.<br />• Where: Called immediately after the manage() method.<br />• When: When adjusting screen dimensions for responsive testing.|
|07|maximize()|• What: Expands the browser window to fill the monitor.<br />• Why: Extends visibility so hidden elements become clickable.<br />• Where: Called at the end of the manage().window() chain.<br />• When: Right after launching the browser.|
|08|navigate()|• What: Grants access to the browser's history and navigation.<br />• Why: Allows complex movements like back, forward, and refresh.<br />• Where: Called on the WebDriver instance.<br />• When: When your test requires simulating browser history buttons.|
|09|to()|• What: Loads a webpage, identical in function to get().<br />• Why: Alternative way to load URLs within navigation history.<br />• Where: Called after navigate() (e.g., driver.navigate().to("url")).<br />• When: Used interchangeably with get(), though less common.|
|10|back()|• What: Simulates clicking the browser's "Back" arrow button.<br />• Why: To return to the previous page in history.<br />• Where: Called after navigate().<br />• When: Testing multi-page workflows or breadcrumb logic.|
|11|forward()|• What: Simulates clicking the browser's "Forward" arrow button.<br />• Why: To return to the page you just backed away from.<br />• Where: Called after navigate().<br />• When: Testing history navigation and state retention.|
|12|refresh()|• What: Reloads the current webpage from scratch.<br />• Why: To pull fresh data or reset UI states.<br />• Where: Called after navigate().<br />• When: Testing dynamic data updates or error page recoveries.|
|13|sendKeys()|• What: Simulates a user typing text or keyboard shortcuts into an element.<br />• Why: To enter input data like usernames, passwords, or search queries into a webpage.<br />• Where: Called on textboxes, textareas, or dropdown menus.<br />• When: Every time your test scenario requires form filling or keyboard navigation.|
|14|getAttribute()|• What: Retrieves the value of any HTML attribute (like value, type, placeholder, or readonly) from an element.<br />• Why: To read hidden properties or data states that are not visible as normal webpage text.<br />• Where: Called on any WebElement.<br />• When: When you need to verify backend states, such as checking if a checkbox is checked or an input field is marked read-only.|
|15|clear()|• What: Deletes all existing text inside an input field.<br />• Why: Selenium's sendKeys() appends text to whatever is already there. clear() ensures you start with an empty box so you don't enter mixed-up data.<br />• Where: Called exclusively on editable text input fields.<br />• When: Right before typing new data into a field that might already contain a default value.|
|16|isEnabled()|• What: Returns true or false depending on whether an element can currently be interacted with.<br />• Why: To check if a button or input field is grayed out (disabled) by the website's logic.<br />• Where: Called on interactive elements like buttons, checkboxes, or input fields.<br />• When: Used before clicking or typing to ensure the web application is ready to receive your input.|
|17|isDisplayed()|• What: Returns true or false based on whether an element is visible on the screen.<br />• Why: To make sure a user can actually see an element (like an error message or a button) before you try to interact with it.<br />• Where: Called on any WebElement.<br />• When: When verifying if popups, loaders, or success messages appear or disappear.|
|18|||
|19|||
|20|||
|21|||
|22|||
|23|||
|24|||
|25|||
|26|||
|27|||
|28|||
|29|||
|30|||
|31|||
|32|||
|33|||
|34|||
|35|||
|36|||
|37|||
|38|||
|39|||
|40|||
|41|||
|42|||
|43|||
|44|||
|45|||
|46|||
|47|||
|48|||
|49|||
|50|||





