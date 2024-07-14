const keydownCtrlEnter = (evnet) => {
    if (!event.target.target === "rdh-ui") {
        return
    }

    const isOnlyEnter = event.code == "Enter" && !(event.ctrlKey || event.metaKey)
    const isCtrlEnter = event.code == "Enter" && event.ctrlKey

    if (isOnlyEnter) {
        event.stopPropagation();
    } else if (isCtrlEnter) {
        event.stopPropagation();
        const newEvent = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "Enter",
            code: "Enter",
            ctrlKey: "false",
            metaKey: "true",
        });
        event.target.dispatchEvent(newEvent);
    }
} 

document.addEventListener("keydown", keydownCtrlEnter, {capture: true})
