import axios from 'axios';
export const reportDetails = (id) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://backend.bionische.com/api/patient/doctors/profile?token=5ef0468f64443&doctor_id="+id)
      .then((response) => {
        dispatch({
          type: 'REPORTDETAILS',
          payload: response.data.data,
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};