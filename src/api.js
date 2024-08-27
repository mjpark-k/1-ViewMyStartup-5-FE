import axios from "axios";

const api = axios.create({
  baseURL: "https://startup-38qa.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getCompany() {
  const company = await api.get("/startups");
  return company.data.data[0];
}

export async function getInvesterLength() {
  const invester = await api.get(
    `/startups/05e004c3-04a5-4b44-8f09-b0a55d51df0a/users`
  );
  return invester.data.users.length;
}

export async function getInvester(params) {
  const query = new URLSearchParams(params).toString();
  const invester = await api.get(
    `/startups/05e004c3-04a5-4b44-8f09-b0a55d51df0a/users?${query}`
  );
  return invester.data.rankUserData;
}

export async function deleteInvester(id) {
  const response = await api.delete(`/users/${id}`);
  return response;
}

// 0a4788aa-b114-41e7-93b2-6e2e90367134
