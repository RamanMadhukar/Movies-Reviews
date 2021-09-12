import React from 'react'
import Sidebar from '../../admin/Sidebar/Sidebar'
import Topbar from '../../admin/Topbar/Topbar'
import './AdminLayout.css'

const AdminLayout = ({children}) => {
    return (
        <>
        <Topbar />
        <div className="container">
            <Sidebar />
            {children}
        </div>
        </>
        
    )
}

export default AdminLayout
