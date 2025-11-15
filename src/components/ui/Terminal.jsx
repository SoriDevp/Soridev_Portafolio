import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { VscChromeClose } from 'react-icons/vsc';

const Terminal = ({ lines, show, onComplete, onClose }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const lineIndexRef = useRef(0);

    useEffect(() => {
        if (!show) {
            setDisplayedLines([]);
            lineIndexRef.current = 0;
            return;
        }

        const interval = setInterval(() => {
            if (lineIndexRef.current < lines.length) {
                setDisplayedLines(prev => [...prev, lines[lineIndexRef.current]]);
                lineIndexRef.current++;
            } else {
                clearInterval(interval);
                if (onComplete) {
                    onComplete();
                }
            }
        }, 300);

        return () => clearInterval(interval);
    }, [show, lines, onComplete]);

    if (!show) {
        return null;
    }

    return (
        <motion.div
            className="absolute bottom-0 left-0 right-0 bg-[#252526] border-t border-[#3c3c3c] h-1/3 flex-shrink-0 flex flex-col z-20"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
        >
            <div className="text-sm text-gray-400 p-2 border-b border-[#3c3c3c] uppercase flex justify-between items-center">
                <span>Output</span>
                <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
                    <VscChromeClose size={18} />
                </button>
            </div>
            <div className="flex-1 text-sm text-gray-300 p-4 overflow-y-auto">
                {displayedLines.map((line, index) => (
                    <p key={index} className="flex items-center">
                        <span className="text-green-400 mr-2">{ '>' }</span> {line}
                    </p>
                ))}
                {displayedLines.length === lines.length && (
                    <p className="flex items-center text-green-400 animate-pulse mt-2">
                        <span className="mr-2">{ '>' }</span>_
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default Terminal;
