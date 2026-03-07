function get(id) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn("El not found: " + id);
        return null;
    }
    return el;
}