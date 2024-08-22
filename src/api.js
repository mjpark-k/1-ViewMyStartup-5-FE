import axios from 'axios';

const api = axios.create({
  baseURL: 'https://startup-38qa.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getCompany() {
  const company = await api.get('/startups');
  return company.data.data[0];
}

export async function getInvesterLength() {
  const invester = await api.get(
    `/startups/0a4788aa-b114-41e7-93b2-6e2e90367134/users`
  );
  return invester.data.users.length;
}

export async function getInvester(params) {
  const query = new URLSearchParams(params).toString();
  const invester = await api.get(
    `/startups/0a4788aa-b114-41e7-93b2-6e2e90367134/users?${query}`
  );
  return invester.data.rankUserData;
}

export async function deleteInvester(id) {
  const response = await api.delete(`/users/${id}`);
  return response;
}

// 0a4788aa-b114-41e7-93b2-6e2e90367134
