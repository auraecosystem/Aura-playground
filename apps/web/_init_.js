// Inside a Svelte component or content script
if (window.webkit && window.webkit.messageHandlers.auraPlaygroundBridge) {
    window.webkit.messageHandlers.auraPlaygroundBridge.postMessage({
        action: "saveToContainer",
        payload: { directory: "User/Library/Containers", data: "..." }
    });
}
