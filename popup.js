document.getElementById("copyBtn").addEventListener("click", copy_ui);

async function copy_ui() {
    try {
        const response = await fetch(chrome.runtime.getURL("ui.txt"));
        const text = await response.text();

        await navigator.clipboard.writeText(text);
        //alert("Copied to clipboard: " + text);
    } catch (error) {
        console.error("Error copying text:", error);
        alert("Failed to copy text! Check console.");
    }
}