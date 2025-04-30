export async function main(ns) {
  const hostname = ns.getHostname();
  const files = ns.ls(hostname);

  // Display all files on host
  ns.tprintf(`\n.`);
  for (let i = 0; i < files.length - 1; i++) {
    ns.tprintf(`├─ ${files[i]}`);
  }
  ns.tprintf(`└─ ${files[files.length - 1]}\n\n`);
}