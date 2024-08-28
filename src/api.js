import axios from 'axios';

const api = axios.create({
  baseURL: 'https://startup-38qa.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getCompany(params) {
  const { id } = params;
  const company = await api.get(`/startups/${id}`);
  return company.data;
}

export async function getCompanyLength() {
  const company = await api.get(`/startups`);
  return company.data.meta.total;
}

export async function getAllDataLength(params) {
  if(!params) {
    const company = await api.get(`/startups`);
    return company.data.meta.total;
  }
  const query = `?keyword=${params}`;
  const company = await api.get(`/startups${query}`);
  return company.data.meta.total;
}

export async function getInvesterLength(params) {
  const { id } = params;
  const invester = await api.get(`/startups/${id}/users`);
  return invester.data.users.length;
}

export async function getInvester(params) {
  const { id, ...otherParams } = params;
  const query = new URLSearchParams(otherParams).toString();
  const invester = await api.get(`/startups/${id}/users?${query}`);
  return invester.data.rankUserData;
}

export async function deleteInvester(params) {
  const id = params;
  const response = await api.delete(`/users/${id}`);
  return response;
}