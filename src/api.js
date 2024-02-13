const API_URL_USER = "https://wedev-api.sky.pro/api/user";
const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasksApi({ token }) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function loginUserApi({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  }

  const user = await response.json();
  return user;
}

export async function registerUserApi({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже сущеcтвует");
  }

  const user = await response.json();
  return user;
}

export async function addNewTaskApi({
  token,
  title,
  topic,
  status,
  description,
  date,
}) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status === 400) {
    throw new Error("Ошибка формата введеных данных");
  }
  const updateTasks = await response.json();
  return updateTasks;
}
