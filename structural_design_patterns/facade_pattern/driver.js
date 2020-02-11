const driver = function(id) {
  const driver_details = [
    { id: 1, name: "Atul" },
    { id: 2, name: "Vikas" },
    { id: 3, name: "sagar" }
  ];

  return driver_details.find(item => item.id === 1);
};

module.exports = driver