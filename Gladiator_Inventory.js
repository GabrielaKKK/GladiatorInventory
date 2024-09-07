function gladiatorInventory(input) {
  let equipment = input[0].split(" ");

  for (let i = 1; i < input.length; i++) {
    let curr = input[i].split(" ");
    let command = curr[0];

    switch (command) {
      case "Buy":
        let equipmentToBuy = curr[1];
        if (equipment.includes(equipmentToBuy)) {
          break;
        }
        equipment.push(equipmentToBuy);
        break;
      case "Trash":
        let equipmentToDelete = curr[1];
        for (let index = 0; index < equipment.length; index++) {
          if (equipment[index] === equipmentToDelete) {
            equipment.splice(index, 1);
          }
        }
        break;
      case "Repair":
        let equipmentToRepair = curr[1];
        for (let index = 0; index < equipment.length; index++) {
          if (equipment[index] === equipmentToRepair) {
            equipment.splice(index, 1);
            equipment.push(equipmentToRepair);
          }
        }
        break;
      case "Upgrade":
        let [equipmentToUpgrade, upgrade] = curr[1].split("-");
        for (let index = 0; index < equipment.length; index++) {
          if (equipment[index] === equipmentToUpgrade) {
            let upgradedEquipment = equipmentToUpgrade + ":" + upgrade;
            equipment.splice(index + 1, 0, upgradedEquipment);
          }
        }
        break;
    }
  }
  console.log(equipment.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);