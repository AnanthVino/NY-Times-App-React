/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

export default function authHeader() {
  const user = localStorage.getItem('token');
  return { Authorization: 'Bearer ' + user };
}