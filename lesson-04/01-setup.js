const missionObjective = "Khám phá và kiểm thử API";

const crew = ["Nam", "Lan", "Hùng"];

let listMember = '';
crew.forEach(item => {
    listMember = `${listMember} ${item},`;
});
console.log(`Hệ thống API Explorer đã sẵn sàng! Phi hành đoàn:${listMember} sẽ cùng bạn thực hiện nhiệm vụ ${missionObjective}`);
