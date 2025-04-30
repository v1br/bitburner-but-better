export async function main(ns) {
  
  let message = " ";
  for (let i = 0; i < ns.args.length; i++) {
    message += ns.args[i] + " ";
  }

  const cow = `
    <${message? message : "moo"}>
               ^__^
               (oo)|_______
               (__)        )?
                  ||----w  |
                  ||     | |
  `;

  ns.tprintf(`\n${cow}\n\n`);
}