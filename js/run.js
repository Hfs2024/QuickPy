let pyodide = null;

async function initPyodide() {
  if (!pyodide) {
    console.log("Loading Pyodide...");
    pyodide = await loadPyodide();
    console.log("Pyodide loaded!");
  }
}

async function runCode(code) {
  if (!pyodide) {
    alert("Pyodide not ready yet. Initializing...");
    await initPyodide();
  }

  try {
    pyodide.runPython(code);
  } catch (err) {
    console.error("Python Error:", err);
  }
}

initPyodide();