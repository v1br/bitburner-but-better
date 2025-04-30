/** @param {NS} ns */
export async function main(ns) {
  await ns.wget(ns.args[0], "/log/curl.txt");
  await ns.sleep(1000);
  ns.tprint(ns.read("/log/curl.txt"));
}