import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined, ContainerOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const { SubMenu } = Menu;

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const tables = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const billing = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
        fill={color}
      ></path>
    </svg>,
  ];

  let hrefStyle = {
    textDecoration: 'none'
  }

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>OCCARZ</span>
      </div>
      <hr />
      <Menu theme="ar" mode="inline">
        <Menu.Item key="1">
          <NavLink style={hrefStyle} to="/statistique">
            <span
              className="icon"
              style={{
                background: page === "statistique" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Statistiques</span>
          </NavLink>
        </Menu.Item>
        <SubMenu
          key="2"
          title={
            <>
              <span className="icon" style={{ background: page === "tables" ? color : "" }}>
                {tables}
              </span>
              <span className="label">Données</span>
            </>
          }
          className="custom-submenu"
        >
          <Menu.ItemGroup className="custom-item-group">
            <Menu.Item key="setting:1">
              <NavLink style={hrefStyle} to="/marques">
                <span className="label nav-link">Marques</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:2">
              <NavLink style={hrefStyle} to="/modeles">
                <span className="label">Modeles</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:3">
              <NavLink style={hrefStyle} to="/anneeModele">
                <span className="label">Annee Modeles</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:4">
              <NavLink style={hrefStyle} to="/boiteDeVitesse">
                <span className="label">Boite de vitesse</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:5">
              <NavLink style={hrefStyle} to="/couleurVehicule">
                <span className="label">Couleurs vehicules</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:6">
              <NavLink style={hrefStyle} to="/carburant">
                <span className="label">Carburants</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:7">
              <NavLink style={hrefStyle} to="/categorieVehicule">
                <span className="label">Categorie vehicules</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:8">
              <NavLink style={hrefStyle} to="/nombrePlace">
                <span className="label">Nombres places</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="setting:9">
              <NavLink style={hrefStyle} to="/etatVehicule">
                <span className="label">Etat vehicule</span>
              </NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="3">
          <NavLink style={hrefStyle} to="/configuration">
            <span
              className="icon"
              style={{
                background: page === "configuration" ? color : "",
              }}
            >
              {<ContainerOutlined />}
            </span>
            <span className="label">Configuration</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink style={hrefStyle} to="/annonces">
            <span
              className="icon"
              style={{
                background: page === "annonces" ? color : "",
              }}
            >
              {<ContainerOutlined />}
            </span>
            <span className="label">Annonces</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;