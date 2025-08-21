export function formatAmount(amount) {
  // Check if the amount is a valid number or string
  if (amount == null || isNaN(amount)) {
    return "0.00"; // Return a default value for invalid input
  }

  // Convert the amount to a string and split it into parts
  const parts = amount.toString().split(".");
  
  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // Handle the decimal part
  if (parts.length === 1) {
    parts.push("00"); // Add cents if there are no decimal parts
  } else if (parts[1].length === 1) {
    parts[1] += "0"; // Add an extra zero to the decimal part if it has only one digit
  }

  // Join the parts and return the formatted amount
  return parts.join(".");
}


export function parseFormattedAmount(formattedAmount) {
  return parseFloat(formattedAmount?.replace(/,/g, ""));
}

// utils/formatDateTime.js
export function formatDate(mongoDate) {
  const date = new Date(mongoDate);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export function formatTime(mongoDate) {
  const date = new Date(mongoDate);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
}
