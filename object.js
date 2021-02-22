// অবজেক্ট হচ্ছে কোন জিনিসের ডকুমেন্ট নিয়ে কাজ করাঃঃঃ
// একটি কাজ তিন ভাবে করা জায়ঃঃ

// প্রথম স্টেপঃ  সহজ অপায়
// var student1 = {id:1, phone:019, name:"abir"};
// var student2 = {id:2, phone:018, name:"mahi"};
// var phoneNumber = student1.phone;
// console.log(phoneNumber);                    // output:: 19   

// সেকেন্ড স্টেপঃ
// var student1 = {id:1, phone:019, name:"abir"};
// var student2 = {id:2, phone:018, name:"mahi"};
// var phonePropName = student1["phone"];
// console.log(phonePropName);                    // output:: 19   

// তূতীয় স্টেপঃ
// var student1 = {id:1, phone:019, name:"abir"};
// var student2 = {id:2, phone:018, name:"mahi"};
//  var phonePropName = "phone";
//  var phoneNo = student1[phonePropName];
//  console.log(phoneNo);                      // output:: 19       



// Update phone number::::
// var student2 = {id:2, phone:1813, name:"mahi"};
// var phoneNo1 = student2.phone;
// student2.phone = 1912;                                // output::
// console.log(phoneNo1);                               // 1813
// console.log(student2);                            //{ id: 2, phone: 1912, name: 'mahi' }//

// Update phone number::::same step two::
// var student2 = {id:2, phone:1813, name:"mahi"};
// var phoneNo1 = student2["phone"];
// student2 ["phone"] = 191244;                        // output::
// console.log(phoneNo1);                            // 1813
// console.log(student2);                           //{ id: 2, phone: 191244, name: 'mahi' }//

// Update phone number::::same step three::
// var student2 = {id:2, phone:1813, name:"mahi"};
// var phonePropName = "phone";                    // output::
// var phoneNo1 = student2[phonePropName];         // 1813
// student2[phonePropName] = 67654;                //{ id: 2, phone: 67654, name: 'mahi' }//
// console.log(phoneNo1);
// console.log(student2);

  
// update new student property/object add::: 
// var student2 = {id:2, phone:1813, name:"mahi"};
// var objectAdd = student2.name;
// student2.cinema = "ogniTwo";                           // output::
// console.log(objectAdd);                                //1813
// console.log(student2);                              //{ id: 2, phone: 1813, name: 'mahi', cinema: 'ogniTwo' }
