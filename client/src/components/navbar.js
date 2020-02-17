import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap'



class Header extends Component {
    state = {
        isOpen: false
    }
    toogle = (event) => {
        console.log(event);

        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <NavbarBrand href="/">Tasks</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">All Tasks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/vic600/scheduler">GitHub</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Header