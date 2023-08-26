"use client";

export function Indiregister() {

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            first: event.target.floating_first_name.value,
            last: event.target.floating_last_name.value,
        }
        alert('YOUR NAME IS ' + data.first + " " + data.last + ":  JAIN DETECTED REGISTRATION REJECTED")
        // Send the data to the server in JSON format.
        //     const JSONdata = JSON.stringify(data)

        //     // API endpoint where we send form data.
        //     const endpoint = '/api/form'

        //     // Form the request for sending data to the server.
        //     const options = {
        //         // The method is POST because we are sending data.
        //         method: 'POST',
        //         // Tell the server we're sending JSON.
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         // Body of the request is the JSON data we created above.
        //         body: JSONdata,
        //     }

        //     // Send the form data to our forms API on Vercel and get a response.
        //     const response = await fetch(endpoint, options)

        //     // Get the response data from server as JSON.
        //     // If server returns the name submitted, that means the form works.
        //     const result = await response.json()
        //     alert(`Is this your full name: ${result.data}`)
        // }
        return (
            <div className="flex flex-col justify-center items-center mt-11">
                <h1 className="text-white text-5xl text-center">INVIDUAL REGISTRATION</h1>
                ;{/* register form */}
                {/* <form onSubmit={handleSubmit} className="my-10">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last name
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>

                <div className="grid  md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="tel"
                            name="floating_phone"
                            id="floating_phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone number
                        </label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_institution"
                        id="floating_institution"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name of Institution
                    </label>
                </div>
                <div className="mb-6">
                    <label for="number_muns" className="text-sm text-gray-400 ">
                        MUN EXPERIENCE
                    </label>
                    <select
                        id="number_muns"
                        className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                    >
                        <option value="First Timer">First Timer</option>
                        <option value="11-3 MUNs">1-3 MUNs</option>
                        <option value="4-10 MUNs">4-10 MUNs</option>
                        <option value="10+ MUNs">10+ MUNs</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label
                        for="placements"
                        className="peer peer-focus:font-medium  text-sm text-gray-400 "
                    >
                        LIST YOUR MUN PLACEMENTS (OPTIONAL)
                    </label>
                    <textarea
                        id="placements"
                        type="text"
                        className="block py-2.5 my-5 h-44 px-0 w-full text-sm text-white bg-gray-800 rounded border-2  appearance-nonetext-white border-gray-600  focus:outline-none focus:ring-0 0 peer"
                        placeholder={
                            "  Example:\n  ->Honourable Delegate : 2 \n  ->Specmen: 1"
                        }
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-80 m-10 rounded-md text-white outline-none  shadow-lg transform active:scale-90 transition-transform"
                >
                    PAY
                </button>
            </form> */}

                <div>
                    <form id="jj">
                        <div class="student_form-get-in-touch">
                            <h2 class="student_form-text section-Heading">
                                <span class="student_form-parent-details">
                                    <span>Participant Information</span>
                                </span>
                            </h2>
                            <div class="cover">
                                <div class="student_form-form-container">
                                    <div class="student_form-container">
                                        <div class="student_form-city input" style="padding-left: 85px;">
                                            <div class="item">
                                                <input type="text" placeholder="Name of Institute" class="student_form-text input" name="institute" required="" />
                                            </div>
                                        </div>
                                        <div class="student_form-city input">
                                            <div class="item">
                                                <label>Event</label>
                                                <select name="event" class="student_form-2" onchange="toggler(this.value, 1)" required="">
                                                    <option selected="" value="" disabled="">          -----</option>
                                                    <option onclick="toggler()" value="BESTMANAGER">BEST MANAGER</option>
                                                    <option value="PANDEMONIUM">PANDEMONIUM</option>
                                                    <option value="ENCUENTRO">ENCUENTRO</option>
                                                    <option value="EXCELCIUS">EXCELCIUS</option>
                                                    <option value="NOVUS">NOVUS</option>
                                                    <option value="ASTRAEUS">ASTRAEUS</option>
                                                    <option value="ZEROHOUR">ZERO HOUR</option>
                                                    <option value="CANCELSIMULATOR">CANCEL SIMULATOR</option>
                                                    <option value="CARPEDIEM">CARPE DIEM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="student_form-city input">
                                            <div class="item">
                                                <select name="mode" class="student_form-2" required="">
                                                    <option selected="" value="" disabled="">          Participation Type</option>
                                                    <option value="Online">ONLINE</option>
                                                    <option value="Offline">OFFLINE</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div class="student_form-content-container" id="team1">
                                <div class="student_form-form-container">
                                    <h2>Team-Member 1</h2>
                                    <div class="student_form-container">
                                        <div class="student_form-city input">
                                            <input type="text" placeholder="Name" class="student_form-text input" name="name1" required="">
                                        </div>
                                        <div class="student_form-city input">
                                            <input type="text" placeholder="Mobile Number" class="student_form-text input" name="mobile_no1" required="">
                                        </div>
                                        <div class="student_form-city input">
                                            <input type="text" placeholder="E-mail" class="student_form-text input" name="email1" required="">
                                        </div>
                                    </div>
                                    <div class="student_form-container1">
                                        <div class="student_form-item input">
                                            <div class="item">
                                                <label for="bdate">Date of Birth</label>
                                                <input id="bdate" type="date" name="bdate1" class="student_form-text input" required="">
                                                    <i></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="student_form-container">
                                        <div class="student_form-city input">
                                            <div class="question">
                                                <label>Gender</label>
                                                <div class="question-answer">
                                                    <div>
                                                        <input type="radio" value="Male" id="radio_1" name="gender1" required="">
                                                            <label for="radio_1" class="radio"><span>Male</span></label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" value="Female" id="radio_2" name="gender1" required="">
                                                            <label for="radio_2" class="radio"><span>Female</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="student_form-city input">
                                            <label for="idproof">ID proof(latest school id card)<h5>[upload into google drive and paste link]</h5></label>
                                            <!-- <input type="file" id="idproof" name="idproof" required>          -->
                                                <input type="text" placeholder="IDproof link" class="student_form-text input" name="idproof1" required="">
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="student_form-content-container" id="team2">
                                    <div class="student_form-form-container">
                                        <h2>Team-Member 2</h2>
                                        <div class="student_form-container">
                                            <div class="student_form-city input">
                                                <input type="text" placeholder="Name" class="student_form-text input" name="name2">
                                            </div>
                                            <div class="student_form-city input">
                                                <input type="text" placeholder="Mobile Number" class="student_form-text input" name="mobile_no2">
                                            </div>
                                            <div class="student_form-city input">
                                                <input type="text" placeholder="E-mail" class="student_form-text input" name="email2">
                                            </div>
                                        </div>
                                        <div class="student_form-container1">
                                            <div class="student_form-item input">
                                                <div class="item">
                                                    <label for="bdate">Date of Birth</label>
                                                    <input id="bdate" type="date" name="bdate2" class="student_form-text input">
                                                        <i class=""></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="student_form-container">
                                            <div class="student_form-city input">
                                                <div class="question">
                                                    <label>Gender</label>
                                                    <div class="question-answer">
                                                        <div>
                                                            <input type="radio" value="Male" id="radio_3" name="gender2">
                                                                <label for="radio_3" class="radio"><span>Male</span></label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" value="Female" id="radio_4" name="gender2">
                                                                <label for="radio_4" class="radio"><span>Female</span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="student_form-city input">
                                                <label for="idproof">ID proof(latest school id card)<h5>[upload into google drive and paste link]</h5></label>
                                                <!-- <input type="file" id="idproof" name="idproof" required>          -->
                                                    <input type="text" placeholder="IDproof link" class="student_form-text input" name="idproof2">
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="student_form-content-container" id="team3">
                                        <div class="student_form-form-container">
                                            <h2>Team-Member 3</h2>
                                            <div class="student_form-container">
                                                <div class="student_form-city input">
                                                    <input type="text" placeholder="Name" class="student_form-text input" name="name3">
                                                </div>
                                                <div class="student_form-city input">
                                                    <input type="text" placeholder="Mobile Number" class="student_form-text input" name="mobile_no3">
                                                </div>
                                                <div class="student_form-city input">
                                                    <input type="text" placeholder="E-mail" class="student_form-text input" name="email3">
                                                </div>
                                            </div>
                                            <div class="student_form-container1">
                                                <div class="student_form-item input">
                                                    <div class="item">
                                                        <label for="bdate">Date of Birth</label>
                                                        <input id="bdate" type="date" name="bdate3" class="student_form-text input">
                                                            <i class=""></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="student_form-container">
                                                <div class="student_form-city input">
                                                    <div class="question">
                                                        <label>Gender</label>
                                                        <div class="question-answer">
                                                            <div>
                                                                <input type="radio" value="Male" id="radio_5" name="gender3">
                                                                    <label for="radio_5" class="radio"><span>Male</span></label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" value="Female" id="radio_6" name="gender3">
                                                                    <label for="radio_6" class="radio"><span>Female</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="student_form-city input">
                                                    <label for="idproof">ID proof(latest school id card)<h5>[upload into google drive and paste link]</h5></label>
                                                    <!-- <input type="file" id="idproof" name="idproof" required>          -->
                                                        <input type="text" placeholder="IDproof link" class="student_form-text input" name="idproof3">
                                                        </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- make change in payment button-->
                                        <div class="agree">
                                            <input type="checkbox" name="agree" id="agree" required="">
                                                <label id="agreelab" for="agree">
                                                    <h4 style="display: inline;">I agree to pay Rs. </h4><h4 style="display: inline;" id="amtcheck">250</h4><h4 style="display:inline;"> by online transfer towards Bifrost registration fees</h4>
                                                </label>
                                        </div>

                                        <div class="student_form-city input">
                                            <input id="kushianddaksh" class="student_form-cta-btn anchor ogbutton" style="background-color: rgb(94, 188, 219);" type="submit" value="PAY Rs. 250">
                                        </div>


                                        <div id="paybtnouter">
                                            <div id="paybtn" style="display: none;">
                                                <form id="paybtnform">
                                                    <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_MJVSI3OvlM5TPe" async=""> </script>
                                                    <span class="razorpay-payment-button svelte-ohbfj8"><span>Some error occurred</span></span></form>
                                            </div>
                                        </div>

                                    </div></form>

                                <div id="footer" style="height: auto;padding-top: 50px;">

                                    <center>
                                        <div class="column2" id="foot_links" style="margin-right: none;padding-top: 20px;">
                                            <h1 class="social" style="font-family: Mont; font-size: 30px; color: #2580aa; text-align: center;">Quick Links</h1>

                                            <ul style="font-family: Mont; font-size: 20px; color: white;list-style-type: none;"><br>

                                                <a href="format.html"><li style="color: white;">Events</li></a>
                                                <a href="about.html"><li style="color: white;">About</li></a>
                                                <a href="regis.html"><li style="color: white;">Register</li></a>
                                                <a href="rules.html"><li style="color: white;">Rules</li></a>
                                                <a href="Brochure.pdf"><li style="color: white;">Brochure</li></a>
                                                <a href="contact.html"><li style="color: white;">Contact Us</li></a>
                                            </ul>
                                            <br>
                                                <h1 class="social" style="font-family: Mont; font-size: 30px; color: #2580aa; text-align: center;">We're Social!</h1>
                                                <a href="https://www.instagram.com/bifrost.sjbhs/" target="_blank"><i class="fa fa-instagram" aria-hidden="true" style="margin: none; padding: none; color: #fff; font-size:5em"></i></a>
                                                <!--  <a href="https://www.instagram.com/bifrost.sjbhs/"><button class="button button1" style="width: 50px;height: 50px;border-color: black;color:black;"><i class="fa fa-instagram" aria-hidden="true" style="margin: none; padding: none;margin-left:-20px ; color: red; font-size:5em"></i></button></a> -->
                                                <!-- <a href="https://www.facebook.com/transcendence.sjbhs"><button class="button button3" style="width: 50px;height: 50px;border-color: black;"><img src="new_logos/fb.png" style="width: 30px;height: auto; margin: none;padding: 0;padding-right: 5px;padding-bottom: 5px;"></button></a> -->

                                        </div>
                                    </center>

                                    <center>

                                        <div class="irvin_aanya">
                                            <div class="column2" id="idontw" style="margin-right: 50px;padding-top: 20px; display: inline-block ;">
                                                <h1 style="font-family: Mont; font-size: 30px; color: #2580aa; text-align: center;">Title Sponsor</h1>
                                                <center><img src="Prestige.jpg" style="width: 300px;padding-top: 20px;padding-bottom: 20px;"></center>

                                                <h1 style="font-family: Mont; font-size: 30px; color: #2580aa; text-align: center;">Merchandise Partner</h1>
                                                <center><img src="Designera.png" style="width: 350px;padding: 20px;padding-top: 0;"></center>

                                            </div>
                                            <div class="column2" id="idontwant" style="margin-right: none;padding-top: 20px; display: inline-block;">


                                                <h1 style="font-family: Mont; font-size: 30px; color: #2580aa; text-align: center;">PTA Sponsors</h1>
                                                <center><img id="QttttAadrash" src="pta1.jpg" style="width: 280px;padding-top: 20px;padding-bottom: 20px;"></center>

                                                <center><img src="pta2.jpg" style="width: 235px;padding-top: 20px;padding-bottom: 20px;"></center>

                                                <center><img src="pta3.jpg" style="width: 235px;padding-top: 20px;padding-bottom: 20px;"></center>
                                            </div>
                                        </div>
                                    </center>
                                    <br>
                                        <br>
                                            <p style="font-family: Mont; font-size: 15px; font-weight: 600; color: #a4a4a4; text-align: center; text-align: center;">Website designed and developed by <br> Joshua Jinu</p>
                                            <br>
                                            </div>


                                        </div>
                                        {/* 
   PAYMENT BUTTON  */}

                                </div>
                                );
}
