// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const successView = () => (
    <Notification>
      <AiFillCheckCircle className="icon1" />
      <div className="msg-container">
        <h1 className="heading success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const errorView = () => (
    <Notification>
      <RiErrorWarningFill className="icon2" />
      <div className="msg-container">
        <h1 className="heading error">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const warningView = () => (
    <Notification>
      <MdWarning className="icon3" />
      <div className="msg-container">
        <h1 className="heading warning">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const infoView = () => (
    <Notification>
      <MdInfo className="icon4" />
      <div className="msg-container">
        <h1 className="heading info">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="container">
      <h1>Alert Notifications</h1>
      {successView()}
      {errorView()}
      {warningView()}
      {infoView()}
    </div>
  )
}

export default AlertNotifications
