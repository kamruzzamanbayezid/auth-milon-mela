import { useContext } from "react";
import { AuthContent } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

      const { user, loading } = useContext(AuthContent);

      if (loading) {
            return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
      }

      if (user) {
            return children;
      }

      return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
      children: PropTypes.node
}