/** @param {NS} ns */
export async function main(ns) {

  const target = ns.args[0];

  // Open ports on target
  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(target);
  }
  if (ns.fileExists("FTPCrack.exe", "home")) {
    ns.ftpcrack(target);
  }
  if (ns.fileExists("relaySMTP.exe", "home")) {
    ns.relaysmtp(target);
  }

  // Get root access to target
  ns.nuke(target);

  // Continously hack to drain server
  while(true) {
    await ns.hack(target);
    await ns.weaken(target);
  }
}