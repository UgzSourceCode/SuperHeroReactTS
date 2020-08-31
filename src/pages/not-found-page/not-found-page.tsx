import React from 'react'
import { TopBar } from '../../component/top-bar/top-bar.component'
import './not-found-page.styles.css'

const NotFoundPage = () => {
    return (
        <div>
            <TopBar />
            <div className="contentNotFoundPage">
                <p>This page isn't exist.</p>
            </div>
        </div>
    )
}

export default NotFoundPage