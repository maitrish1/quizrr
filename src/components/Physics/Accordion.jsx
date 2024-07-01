"use client"
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const testData = {
    success: true,
    message: "Pack tests sent successfully",
    data: {
        count: 31,
        hasNextPage: true,
        isPackPurchased: false,
        subgroups: [
            {
                title: "Units and Dimensions",
                tests: [
                    {
                        testType: "Topic Test",
                        unit: "Mechanics 1",
                        test: {
                            _id: "66067ab4c0857387255f8126",
                            title: "Units and Dimensions - Test 1",
                            description: "Topics covered: Units, Dimensions",
                            totalTime: 30,
                            totalQuestions: 15,
                            totalMarks: 60,
                            startDate: "2024-04-15T03:30:00.000Z",
                            endDate: "2025-08-31T18:29:59.000Z",
                            detailAccessDate: "2024-04-15T03:30:00.000Z",
                            analysisVideo: "",
                            type: "paid",
                            syllabus: "Topics covered: Units, Dimensions",
                            isTestAttemptedByUser: false,
                            totalMarkScored: 0
                        }
                    },
                    {
                        testType: "Topic Test",
                        unit: "Mechanics 1",
                        test: {
                            _id: "66067ab4c0857387255f812f",
                            title: "Units and Dimensions - Test 2",
                            description: "Topics covered: Dimensions",
                            totalTime: 30,
                            totalQuestions: 15,
                            totalMarks: 60,
                            startDate: "2024-04-15T03:30:00.000Z",
                            endDate: "2025-08-31T18:29:59.000Z",
                            detailAccessDate: "2024-04-15T03:30:00.000Z",
                            analysisVideo: "",
                            type: "paid",
                            syllabus: "Topics covered: Dimensions",
                            isTestAttemptedByUser: false,
                            totalMarkScored: 0
                        }
                    },
                    {
                        testType: "Topic Test",
                        unit: "Mechanics 1",
                        test: {
                            _id: "66067ab4c0857387255f8131",
                            title: "Units and Dimensions - Test 3",
                            description: "Topics covered: Dimensions",
                            totalTime: 20,
                            totalQuestions: 10,
                            totalMarks: 40,
                            startDate: "2024-04-15T03:30:00.000Z",
                            endDate: "2025-08-31T18:29:59.000Z",
                            detailAccessDate: "2024-04-15T03:30:00.000Z",
                            analysisVideo: "",
                            type: "paid",
                            syllabus: "Topics covered: Dimensions",
                            isTestAttemptedByUser: false,
                            totalMarkScored: 0
                        }
                    },
                    {
                        testType: "Chapter Test",
                        unit: "Mechanics 1",
                        test: {
                            _id: "66067ab4c0857387255f8133",
                            title: "Units and Dimensions - Chapter Test",
                            description: "Questions from all topics of the chapter",
                            totalTime: 60,
                            totalQuestions: 30,
                            totalMarks: 120,
                            startDate: "2024-04-15T03:30:00.000Z",
                            endDate: "2025-08-31T18:29:59.000Z",
                            detailAccessDate: "2024-04-15T03:30:00.000Z",
                            analysisVideo: "",
                            type: "paid",
                            syllabus: "Questions from all topics of the chapter",
                            isTestAttemptedByUser: false,
                            totalMarkScored: 0
                        }
                    }
                ]
            },
        ]
    }
};

const Accordions = () => {
    const { subgroups } = testData.data;

    return (
        <div className="container mx-auto p-4">
            {subgroups.map((subgroup, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-200">
                        <Typography className="font-bold">{subgroup.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="flex flex-col space-y-4">
                        {subgroup.tests.map((testItem, testIndex) => (
                            <div key={testIndex} className="border p-4 rounded-lg">
                                <Typography variant="h6">{testItem.test.title}</Typography>
                                <Typography className="text-gray-600">{testItem.test.description}</Typography>
                                <Typography className="text-sm text-gray-500">Total Questions: {testItem.test.totalQuestions}</Typography>
                                <Typography className="text-sm text-gray-500">Total Marks: {testItem.test.totalMarks}</Typography>
                                <Typography className="text-sm text-gray-500">Total Time: {testItem.test.totalTime} minutes</Typography>
                                <Button variant="contained" color="primary" className="mt-2">Take Test</Button>
                            </div>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default Accordions;
