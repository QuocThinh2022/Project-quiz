import { useEffect, useState } from 'react';
import { getListQuestions } from '../../services/questionsService';
import { useNavigate, useParams } from 'react-router-dom';
import { getTopic } from '../../services/topicService';
import { getCookie } from '../../helpers/cookie';
import { createAnswer } from '../../services/answerService';

function Quiz() {
    const [dataTopic, setDataTopic] = useState();
    const [dataQuiz, setDataQuiz] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getTopic(params.id);
            setDataTopic(res);
        }
        fetchApi();
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getListQuestions(params.id);
            setDataQuiz(res);
        }
        fetchApi();
    }, [])
    // console.log(dataQuiz);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let selectAnswer = [];
        for (let i = 0; i < e.target.elements.length; ++i) {
            let res = e.target.elements[i];
            if (res.checked) {
                selectAnswer.push({
                    questionId: parseInt(res.name),
                    answer: parseInt(res.value)
                })
            }
        }
        
        const options = {
            userId: parseInt(getCookie('id')),
            topicId: parseInt(params.id),
            answers: selectAnswer
        }
        
        const result = await createAnswer(options);
        if (result) {
            navigate('/result/' + result.id);
        }

    }

    return (

        <>
            {dataTopic && <h2>Quiz chu de: {dataTopic.name}</h2>}
            {dataQuiz && (
                <form onSubmit={handleSubmit}>
                    {dataQuiz.map((item, i) => (
                        <div key={i}>
                            <p>Cau {i + 1}: {item.question}</p>
                            {item.answers.map((answer, index) => (
                                <div key={index}>
                                    <input type='radio' id={`quiz-${item.id}-${index}`}  name={item.id} value={index} />
                                    <label htmlFor={`quiz-${item.id}-${index}`}>{answer}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button>Submit</button>
                </form>
            )}
            
        </>
    )
}

export default Quiz;