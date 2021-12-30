import React from 'react'
import './mystyles.css' 
import '.././AppStyles.css'

import style from '.././AppStyles.module.css'
function StyleSheet() {

    const styles = {
        fontSize : '72px',
        color : 'blue'
    }

    return (
        <div>
            <h1 className="primary">Style Sheets</h1>
            <h1 style={styles}>Inline !!!</h1>
            <h1 className="error"> Global </h1>

            <h1 className={style.success}> Module </h1>
        </div>
    )
}

export default StyleSheet
