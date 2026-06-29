// Enable ES module mode by using `.mjs` extension or setting "type": "module" in package.json

// Display module metadata
console.log("Module URL:", import.meta.url);

// Example metadata object
const moduleInfo = {
    name: "Example Meta Module",
    version: "1.0.0",
    loadedAt: new Date().toISOString()
};

// Proxy to intercept property access
const metaProxy = new Proxy(moduleInfo, {
    get(target, prop) {
        console.log(`Accessing metadata property: ${String(prop)}`);
        return prop in target ? target[prop] : `Property "${String(prop)}" not found`;
    }
});

// Use the proxy
console.log("Name:", metaProxy.name);
console.log("Version:", metaProxy.version);
console.log("Author:", metaProxy.author); // Non-existent property
