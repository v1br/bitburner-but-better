/** @param {NS} ns */
export async function main(ns) {

  const fname = ns.args[0];

  if (ns.fileExists('/log/x.txt')) {

    if (!fname) {
      ns.tprintf("ERROR: Missing filename!");
      return;
    }

    if (!ns.fileExists(fname)) {
      try {
        ns.mv("home", "/log/x.txt", fname);
        ns.tprintf(`INFO: ${fname} placed`)
      } catch (err) {
        ns.tprint("ERROR: Invalid filename!");
      }
      return;
    }
  }
}