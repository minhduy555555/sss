import './boxchat.css'
import {useState,useContext} from 'react'
import {closeBoxchat} from '../App'

function Boxchat(){
    var [commnent,setComment] = useState([])

   async function handelSubmit(){
    fetch('http://localhost:8081/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: commnent })
    })
    .then(response => response.json()) // Chuyển đổi response thành JSON
    .then(data => {
        console.log(data); // Dữ liệu JSON từ server
    })
    .catch(error => {
        console.log('Fetch error:', error);
    });
          
    }


    return (
        <>
         <div className="container_box"  >
            <div className = "header_box">
                <div className="name_box" >
                    Chat Box Ai
                </div>

                <div className="exit">
                    X
                </div>
            </div>
            <div className = "body_box">

                <div className="container-box-chat-text">
                {/* 1 cột 65 px  */}
                    <div className="box-chat-text box-chat-text-left ">heloo</div>
                    <div className="box-chat-text box-chat-text-right " style={{top:'65px'}}> heoool1111qqqq</div>
                    <div className="box-chat-text box-chat-text-left  " style={{top:'130px'}}>heloo</div>
                    <div className="box-chat-text box-chat-text-right " style={{top:'195px'}}> heoool1111qqqq</div>

                </div>

                <form className = "form"  >
                    <input className = "input_box " placeholder="vui long nhap ...." value={commnent} onChange={(e)=>{setComment(e.target.value)}} />
                    <div className = "submit"   onClick={handelSubmit}  > Gửi  </div>
                </form>
            </div>

        </div>
        
        </>
    )
}

export default Boxchat