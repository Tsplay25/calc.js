function switchTheme() {
    const body = document.querySelector("body");
    const root = document.querySelector(":root");
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9");
        root.style.setProperty("--border-color", "#aaa");
        root.style.setProperty("--font-color", "#212529");
        root.style.setProperty("--button-font-color", "#f1f5f9");
        root.style.setProperty("--primary-color", "#6200ee");
        body.dataset.theme = "light";
    } else {
        root.style.setProperty("--bg-color", "#212529");
        root.style.setProperty("--border-color", "#666");
        root.style.setProperty("--font-color", "#f1f5f9");
        root.style.setProperty("--button-font-color", "#212529");
        root.style.setProperty("--primary-color", "#bb86fc");
        body.dataset.theme = "dark";
    }
}

export default switchTheme;
