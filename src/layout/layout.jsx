import React,{Component} from 'react';
import Header from '../header/header'
import Footer from '../footer/footer';
import SidebarComponent from '../sidebar/sidebar-component';

class Layout extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                        <div className="col-lg-1 col-md-2 p-0">
                            <SidebarComponent />
                        </div>
                        <div className="col-lg-11 col-md-10 p-0">
                                <div>
                                    <Header />
                                    {this.props.children}
                                    <Footer />
                                </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Layout;