import axios from "axios";
import confetti from "canvas-confetti";

const listeners = [];

function subscribe(func) {
  listeners.push(func);
}

async function purchase(itemId) {
  const res = await axios.post('/api/store/purchase', {
    id: itemId,
  });

  if (!res.data.ok) {
    return;
  }

  for (const listener of listeners) {
    listener(itemId);
  }
}

export {
  purchase,
  subscribe,
};