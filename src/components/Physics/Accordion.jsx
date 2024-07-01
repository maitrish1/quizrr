import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import testData from './../../data/data.json';

const Accordions = () => {
    const { subgroups } = testData.data;

    return (
        <div className="container mx-auto p-4">
            {subgroups.map((subgroup, index) => (
                <Accordion key={index} elevation={3} component={Paper} className="mb-4">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-200">
                        <Typography className="font-bold">{subgroup.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="flex flex-col space-y-4">
                        {subgroup.tests.map((testItem, testIndex) => (
                            <div key={testIndex} className="p-4 rounded-lg shadow-md flex flex-col space-y-2">
                                <Typography variant="h6">{testItem.test.title}</Typography>
                                <Typography className="text-gray-600">{testItem.test.description}</Typography>
                                <div className="flex justify-between">
                                    <Typography className="text-sm text-gray-500">Total Questions: {testItem.test.totalQuestions}</Typography>
                                    <Typography className="text-sm text-gray-500">Total Marks: {testItem.test.totalMarks}</Typography>
                                    <Typography className="text-sm text-gray-500">Total Time: {testItem.test.totalTime} minutes</Typography>
                                    <Button variant="contained" color="primary">Take Test</Button>
                                </div>
                            </div>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default Accordions;
