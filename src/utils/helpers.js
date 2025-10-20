export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const generateId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};