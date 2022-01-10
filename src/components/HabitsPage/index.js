import axios from 'axios';
import Header from "../Header";
import Footer from "../Footer";
import NewHabit from "../NewHabit";
import { useState, useEffect, useContext } from 'react';
import { Container, AddHabit, Title, Habit, Habits } from "./style";
import ImageContext from "../../contexts/ImageContext";
import TokenContext from "../../contexts/TokenContext";
import { useNavigate } from 'react-router-dom';


function HabitsPage() {
     const [habits, setHabits] = useState([]);
     const [newHabit, setNewHabit] = useState(false);
     const { image } = useContext(ImageContext);
     const { token } = useContext(TokenContext);

     const weekdays = ['D', 'S', "T", 'Q', 'Q', 'S', 'S'];
     const navigate = useNavigate();

     function handleHabit() {
          const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => {
               setHabits(response.data)
          });
          promise.catch(error => console.log(error.response));
     }
     useEffect(() => {
          handleHabit()
     }, []);

     function handleDeleteHabit(IdHabit) {
          console.log('fui clicado');

          const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${IdHabit}`, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => handleHabit())
          promise.catch(error => console.log(error.response))
     }

     return (
          <Container>
               <Header image={image} />
               <Title>
                    <h1>Meus hábitos</h1>
                    <AddHabit onClick={() => setNewHabit(!newHabit)}>+</AddHabit>
               </Title>
               {newHabit && <NewHabit habits={handleHabit} setNewHabit={setNewHabit} weekdays={weekdays} />}
               {habits.length === 0 ? <span>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
               </span> :
                    <Habits>
                         {
                              habits.map((habit) => (
                                   <Habit>
                                        <div className="habit-top">
                                             <span>{habit.name}</span>
                                             <ion-icon name="trash-outline" onClick={() => {
                                                  window.confirm("Deseja realmente excluir o hábito?") &&
                                                       handleDeleteHabit(habit.id)
                                             }}>
                                             </ion-icon>
                                        </div>
                                        <div>{habit.days}</div>
                                   </Habit>
                              ))
                         }
                    </Habits>
               }
               <Footer />
          </Container>
     );
}

export default HabitsPage;