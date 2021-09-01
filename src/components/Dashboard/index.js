import React from "react";
import {Link, ProBtn, StyledDashboard, UserInfo} from "./Dashboard.styles";
import IMGController from "../../assets/controller.png";

const Dashboard = () => {
    return (
        <StyledDashboard>
            <UserInfo>
                <i className="fas fa-user"></i>
                <h3>User</h3>
                <p>Pro Member</p>
            </UserInfo>
            <ul>
                <li>
                    <Link>
                        <i className="fab fa-twitch"></i>
                        <h2>Streams</h2>
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fab fa-steam"></i>
                        <h2>Games</h2>
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fas fa-gamepad"></i>
                        <h2>New</h2>
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="fas fa-book"></i>
                        <h2>Library</h2>
                    </Link>
                </li>
            </ul>

            <ProBtn>
                <h2>Join pro for free games.</h2>
                <img src={IMGController} alt="controller"/>
            </ProBtn>
        </StyledDashboard>
    );
};

export default Dashboard;