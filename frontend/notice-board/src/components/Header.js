import React from 'react';

class Header extends React.Component {
    render() {
        const { isLoggedIn, id, logout } = this.props;
        return (
            <>
                <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
                    <h1 className="m-0 text-center flex-grow-1" style={{ textAlign: 'center' }}>
                        Digital Dashboard
                    </h1>
                    {isLoggedIn && (
                        <h3 className="m-0" style={{ textAlign: 'right' }}>
                            {id}
                            <button 
                              className='btn btn-danger ms-3' 
                              onClick={logout}
                            >
                              Logout
                            </button>
                        </h3>
                    )}
                </div>
            </>
        );
    }
}

export default Header;