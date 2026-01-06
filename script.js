const data = [
  { type: "Logs", period: "30 days", status: "OK" },
  { type: "User Sessions", period: "7 days", status: "Expired" },
  { type: "Audit Records", period: "1 year", status: "OK" }
];

const tbody = document.getElementById("policies");

function render() {
  tbody.innerHTML = "";
  data.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.type}</td>
        <td>${d.period}</td>
        <td class="${d.status === "OK" ? "ok" : "expired"}">
          ${d.status}
        </td>
      </tr>
    `;
  });
}

function cleanup() {
  document.getElementById("msg").innerText =
    "Cleanup job executed based on retention policy";
}

render();
