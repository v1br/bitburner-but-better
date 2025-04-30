/** @param {NS} ns */
export async function main(ns) {


  // Collect arguments for script
  const target = ns.args[0];
  const moneyThresh = ns.getServerMaxMoney(target);
  const securityThresh = ns.getServerMinSecurityLevel(target);


  // Open all ports on target server
  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(target);
  }
  if (ns.fileExists("FTPCrack.exe", "home")) {
    ns.ftpcrack(target);
  }
  if (ns.fileExists("relaySMTP.exe", "home")) {
    ns.relaysmtp(target);
  }
  if (ns.fileExists("HTTPWorm.exe", "home")) {
    ns.httpworm(target);
  }
  if (ns.fileExists("SQLInject.exe", "home")) {
    ns.sqlinject(target);
  }


  // Gain full access to target
  ns.nuke(target);


  // Continously hack, grow, weaken
  while(true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      await ns.weaken(target);
    } 
    else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      await ns.grow(target);
    } 
    else {
      await ns.hack(target);
    }
  }
}