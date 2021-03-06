import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import "./App.less";
import { Menu, Breadcrumb, Icon, LocaleProvider } from "antd";
import Login from "./login/Login";
import enUS from "antd/lib/locale-provider/en_US";
// import "./App.scss";

const SubMenu = Menu.SubMenu;

class App extends Component {

  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
  }

  renderAuthenticatedPage() {

    return (
      <LocaleProvider locale={enUS}>

        <div className="ant-layout-aside">
          <aside className="ant-layout-sider">

            <Link to={'/'}>
              <div className="ant-layout-logo"/>
            </Link>

            <Menu mode="inline" theme="light" defaultOpenKeys={['sub2']}>

              <SubMenu key="user-mgmt-submenu" title={<span><Icon type="user"/>User Management</span>}>

                <Menu.Item key="1">
                  <Link to={'/users'}>Users</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={'/options'}>Options</Link>
                </Menu.Item>

              </SubMenu>

              <SubMenu key="sub2" title={<span><Icon type="user"/>Comps Demo</span>}>

                <SubMenu key="menu-alert" title={<span><Icon type="exclamation-circle-o"/>Alert</span>}>

                  <Menu.Item key="menu-alert-banner">
                    <Link to={'/alert-banner-demo'}>Banner Alert</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-alert-basic">
                    <Link to={'/alert-basic-demo'}>Alert variations</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-alert-icon">
                    <Link to={'/alert-icon-demo'}>Alerts with icon</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="badge-demos" title={<span><Icon type="message"/>Badge</span>}>

                  <Menu.Item key="change-badge-demo">
                    <Link to={'/change-badge-demo'}>Change Badges</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-form" title={<span><Icon type="exception"/>Form</span>}>

                  <Menu.Item key="menu-form-advanced-search">
                    <Link to={'/adv-search-form'}>Advanced Search Form</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="input-submenu" title={<span><Icon type="edit"/>Input</span>}>

                  <Menu.Item key="input-submenu-1">
                    <Link to={'/input'}>Input</Link>
                  </Menu.Item>

                  <Menu.Item key="input-submenu-2">
                    <Link to={'/input-search'}>Search Input</Link>
                  </Menu.Item>

                  <Menu.Item key="input-submenu-3">
                    <Link to={'/input-sizes'}>Input sizes</Link>
                  </Menu.Item>

                  <Menu.Item key="input-submenu-4">
                    <Link to={'/input-textarea-autosize'}>Textarea autosize</Link>
                  </Menu.Item>

                  <Menu.Item key="input-submenu-5">
                    <Link to={'/input-number'}>InputNumber</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="layout-submenu" title={<span><Icon type="appstore-o"/>Layout</span>}>

                  <Menu.Item key="layout-submenu-basic">
                    <Link to={'/layout-basic'}>Basic Layout</Link>
                  </Menu.Item>

                  <Menu.Item key="layout-submenu-flex">
                    <Link to={'/layout-flex'}>Flex Layout</Link>
                  </Menu.Item>

                  <Menu.Item key="layout-submenu-flex-align">
                    <Link to={'/layout-flex-align'}>Flex Align Layout</Link>
                  </Menu.Item>

                  <Menu.Item key="layout-submenu-gutter">
                    <Link to={'/layout-gutter'}>Layout Gutter</Link>
                  </Menu.Item>

                  <Menu.Item key="layout-submenu-responsive">
                    <Link to={'/layout-responsive'}>Layout Responsive</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-submenu" title={<span><Icon type="menu-unfold"/>Menu</span>}>

                  <Menu.Item key="menu-submenu-1">
                    <Link to={'/horizontal-menu'}>Horizontal Menu</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-submenu-2">
                    <Link to={'/side-menu'}>Side Menu</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-submenu-3">
                    <Link to={'/sider-menu'}>Sider Menu</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-modal" title={<span><Icon type="scan"/>Modal</span>}>

                  <Menu.Item key="menu-modals-1">
                    <Link to={'/basic-modal'}>Basic Modal</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-modals-2">
                    <Link to={'/basic-modal-overlay'}>Basic Modal Overlay Click</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-notification" title={<span><Icon type="info-circle-o"/>Notification</span>}>

                  <Menu.Item key="menu-notification-1">
                    <Link to={'/notification-close-handler'}>Notification close handler</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-notification-2">
                    <Link to={'/notification-with-icon'}>Notifications with icon</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="popconfirm-demos" title={<span><Icon type="message"/>Popconfirm</span>}>

                  <Menu.Item key="popconfirm-basic-demo">
                    <Link to={'/popconfirm-basic-demo'}>Popconfirm Basic Demo</Link>
                  </Menu.Item>

                  <Menu.Item key="popconfirm-custom-lables">
                    <Link to={'/popconfirm-custom-labels'}>Popconfirm Custom Labels</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-popover" title={<span><Icon type="environment-o"/>Popover</span>}>

                  <Menu.Item key="menu-popover-1">
                    <Link to={'/popover-1'}>Popover demo 1</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-progress" title={<span><Icon type="ellipsis"/>Progress</span>}>

                  <Menu.Item key="menu-progress-1">
                    <Link to={'/progress-1'}>Progress demo 1</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-progress-2">
                    <Link to={'/progress-2'}>Progress demo 2</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-progress-3">
                    <Link to={'/progress-3'}>Progress demo 3</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-table" title={<span><Icon type="bars"/>Table</span>}>

                  <Menu.Item key="menu-table-1">
                    <Link to={'/table-filters-sorter'}>Table Filters Sorters Demo 1</Link>
                  </Menu.Item>

                  <Menu.Item key="menu-table-2">
                    <Link to={'/table-row-selection-props'}>Table Row Selection Props</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="tooltip" title={<span><Icon type="arrow-down"/>Tooltip</span>}>

                  <Menu.Item key="tooltip-center-demo">
                    <Link to={'/tooltip-center-demo'}>Tooltip arrowPointAtCenter</Link>
                  </Menu.Item>

                </SubMenu>

                <Menu.Item key="2-1">
                  <Link to={'/transfer-demo'}>Transfer</Link>
                </Menu.Item>

                <Menu.Item key="2-2">
                  <Link to={'/tree-select-demo'}>Tree Select</Link>
                </Menu.Item>

                <Menu.Item key="2-10">
                  <Link to={'/checkbox-group'}>CheckboxGroup</Link>
                </Menu.Item>

              </SubMenu>

            </Menu>

          </aside>

          <div className="ant-layout-main">

            <div className="ant-layout-header">header</div>

            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Section 1</Breadcrumb.Item>
                <Breadcrumb.Item>Subsection 11</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div style={{ height: 590 }}>
                  {this.props.children}
                </div>
              </div>
            </div>

            <div className="ant-layout-footer">
              © 2016 ant-design-playground
            </div>

          </div>

        </div>

      </LocaleProvider>
    );
  }

  render() {

    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated ? this.renderAuthenticatedPage() : <Login/>}
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { routing, auth: { isAuthenticated, user } } = state;
  return {
    isAuthenticated, user, routing
  };

}

export default connect(mapStateToProps)(App);
