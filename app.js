// GBS Maturity Assessment Application

// Assessment Questions by Dimension
const questions = [
    // Governance (3 questions)
    {
        id: 1,
        dimension: 'Governance',
        question: 'How is your GBS organization structured and governed?',
        options: [
            { value: 1, text: 'No formal GBS structure; services managed independently by business units' },
            { value: 2, text: 'Basic shared services with limited governance; siloed decision-making' },
            { value: 3, text: 'Centralized GBS with defined leadership; governance policies exist but inconsistently applied' },
            { value: 4, text: 'Strong GBS governance with clear accountability, KPIs, and regular steering committee reviews' },
            { value: 5, text: 'World-class governance with enterprise-wide integration, strategic alignment, and continuous optimization' }
        ]
    },
    {
        id: 2,
        dimension: 'Governance',
        question: 'How effectively does your GBS align with enterprise strategy?',
        options: [
            { value: 1, text: 'GBS operates independently with no connection to enterprise goals' },
            { value: 2, text: 'Limited alignment; GBS supports cost reduction but not strategic initiatives' },
            { value: 3, text: 'GBS strategy partially aligned; annual planning considers enterprise priorities' },
            { value: 4, text: 'Strong alignment with enterprise strategy; GBS actively contributes to business outcomes' },
            { value: 5, text: 'GBS is a strategic partner, driving innovation and competitive advantage enterprise-wide' }
        ]
    },
    {
        id: 3,
        dimension: 'Governance',
        question: 'How mature is your GBS performance management approach?',
        options: [
            { value: 1, text: 'No formal performance metrics or reporting' },
            { value: 2, text: 'Basic metrics focused on volume and cost; limited reporting' },
            { value: 3, text: 'Defined SLAs and KPIs; regular performance reporting to stakeholders' },
            { value: 4, text: 'Comprehensive scorecards with outcome-based metrics; benchmarking against industry standards' },
            { value: 5, text: 'Real-time performance dashboards with predictive analytics; continuous improvement embedded' }
        ]
    },

    // Process Standardization (3 questions)
    {
        id: 4,
        dimension: 'Process Standardization',
        question: 'To what extent are your GBS processes standardized across the organization?',
        options: [
            { value: 1, text: 'No standardization; each location/unit has unique processes' },
            { value: 2, text: 'Limited standardization; some common processes but many variations' },
            { value: 3, text: 'Moderate standardization; core processes defined but regional variations exist' },
            { value: 4, text: 'High standardization with global process ownership; minimal justified variations' },
            { value: 5, text: 'Fully standardized end-to-end processes with continuous optimization and automation' }
        ]
    },
    {
        id: 5,
        dimension: 'Process Standardization',
        question: 'How do you manage and improve processes within GBS?',
        options: [
            { value: 1, text: 'No formal process documentation or improvement methodology' },
            { value: 2, text: 'Basic process documentation exists; improvements are ad-hoc' },
            { value: 3, text: 'Process documentation maintained; periodic reviews and lean/Six Sigma initiatives' },
            { value: 4, text: 'Robust process management with global process owners; regular optimization reviews' },
            { value: 5, text: 'Center of Excellence for process improvement; AI-driven process mining and optimization' }
        ]
    },
    {
        id: 6,
        dimension: 'Process Standardization',
        question: 'How well is end-to-end process visibility maintained across GBS operations?',
        options: [
            { value: 1, text: 'No visibility; processes are black boxes' },
            { value: 2, text: 'Limited visibility within functions; no cross-functional view' },
            { value: 3, text: 'Moderate visibility with process mapping; some cross-functional monitoring' },
            { value: 4, text: 'Good end-to-end visibility with process mining tools; bottlenecks identified proactively' },
            { value: 5, text: 'Complete real-time visibility with digital twin of operations; predictive insights' }
        ]
    },

    // Technology & Digital (3 questions)
    {
        id: 7,
        dimension: 'Technology & Digital',
        question: 'What is the level of automation and digital enablement in your GBS?',
        options: [
            { value: 1, text: 'Manual processes with minimal technology support' },
            { value: 2, text: 'Basic automation with spreadsheets and simple tools; legacy systems prevalent' },
            { value: 3, text: 'Core systems modernized; RPA deployed in select areas; digital initiatives underway' },
            { value: 4, text: 'Extensive automation with RPA, workflow tools; integrated digital platforms' },
            { value: 5, text: 'Hyperautomation with AI/ML, intelligent process automation; cloud-native architecture' }
        ]
    },
    {
        id: 8,
        dimension: 'Technology & Digital',
        question: 'How advanced is your data and analytics capability within GBS?',
        options: [
            { value: 1, text: 'No analytics; data is fragmented and unreliable' },
            { value: 2, text: 'Basic reporting from transactional systems; limited data quality' },
            { value: 3, text: 'Descriptive analytics with dashboards; data governance improving' },
            { value: 4, text: 'Advanced analytics with predictive models; integrated data platform' },
            { value: 5, text: 'AI-powered insights with prescriptive analytics; data drives all decisions' }
        ]
    },
    {
        id: 9,
        dimension: 'Technology & Digital',
        question: 'How effectively does your GBS leverage emerging technologies?',
        options: [
            { value: 1, text: 'No awareness or adoption of emerging technologies' },
            { value: 2, text: 'Limited awareness; no formal evaluation process' },
            { value: 3, text: 'Technology watch in place; piloting select innovations' },
            { value: 4, text: 'Structured innovation program; regular technology adoption roadmap' },
            { value: 5, text: 'Innovation lab with rapid experimentation; leading-edge technology deployment' }
        ]
    },

    // Talent & Culture (3 questions)
    {
        id: 10,
        dimension: 'Talent & Culture',
        question: 'How would you describe the talent strategy for your GBS organization?',
        options: [
            { value: 1, text: 'No specific GBS talent strategy; high turnover and skill gaps' },
            { value: 2, text: 'Basic hiring and training; talent management is reactive' },
            { value: 3, text: 'Defined talent strategy with training programs; career paths emerging' },
            { value: 4, text: 'Comprehensive talent management with career paths, upskilling, and succession planning' },
            { value: 5, text: 'World-class employer brand; continuous learning culture; talent pipeline excellence' }
        ]
    },
    {
        id: 11,
        dimension: 'Talent & Culture',
        question: 'How developed is the skillset of your GBS workforce for digital and analytical work?',
        options: [
            { value: 1, text: 'Primarily transactional skills; no digital capabilities' },
            { value: 2, text: 'Limited digital skills; training is minimal' },
            { value: 3, text: 'Growing digital skills; training programs in place for select roles' },
            { value: 4, text: 'Strong digital and analytical skills across the workforce; continuous upskilling' },
            { value: 5, text: 'Future-ready workforce with advanced digital, analytical, and consulting capabilities' }
        ]
    },
    {
        id: 12,
        dimension: 'Talent & Culture',
        question: 'What is the culture and employee engagement level in your GBS?',
        options: [
            { value: 1, text: 'Low morale and engagement; "cost center" mentality prevails' },
            { value: 2, text: 'Variable engagement; culture is inconsistent across locations' },
            { value: 3, text: 'Positive culture with engagement initiatives; employee voice improving' },
            { value: 4, text: 'Strong engagement with purpose-driven culture; recognized as employer of choice' },
            { value: 5, text: 'Exceptional culture with innovation mindset; employees are brand ambassadors' }
        ]
    },

    // Service Delivery (3 questions)
    {
        id: 13,
        dimension: 'Service Delivery',
        question: 'How comprehensive is your GBS service portfolio?',
        options: [
            { value: 1, text: 'Limited scope; only basic transactional services' },
            { value: 2, text: 'Core finance and HR services; siloed delivery' },
            { value: 3, text: 'Expanding portfolio with multiple functions; some value-added services' },
            { value: 4, text: 'Comprehensive multi-function GBS with analytics and advisory services' },
            { value: 5, text: 'Full-scope GBS as strategic partner; includes CoE capabilities and innovation services' }
        ]
    },
    {
        id: 14,
        dimension: 'Service Delivery',
        question: 'How mature is your service delivery model and customer experience?',
        options: [
            { value: 1, text: 'Reactive support with no defined service model' },
            { value: 2, text: 'Basic ticketing system; inconsistent service quality' },
            { value: 3, text: 'Defined service catalog with SLAs; customer satisfaction measured' },
            { value: 4, text: 'Omnichannel delivery with self-service portal; proactive customer engagement' },
            { value: 5, text: 'Consumer-grade experience with AI-powered service; real-time feedback integration' }
        ]
    },
    {
        id: 15,
        dimension: 'Service Delivery',
        question: 'How effectively does your GBS manage third-party relationships and the ecosystem?',
        options: [
            { value: 1, text: 'No third-party management; vendors managed ad-hoc' },
            { value: 2, text: 'Basic vendor management; limited visibility into partner performance' },
            { value: 3, text: 'Formal vendor management with contracts and reviews; selective partnerships' },
            { value: 4, text: 'Strategic partner management with integrated delivery; joint governance' },
            { value: 5, text: 'Ecosystem orchestration with best-in-class partners; outcome-based relationships' }
        ]
    }
];

// World-class benchmarks by dimension
const worldClassBenchmarks = {
    'Governance': 4.5,
    'Process Standardization': 4.3,
    'Technology & Digital': 4.4,
    'Talent & Culture': 4.2,
    'Service Delivery': 4.5
};

// State
let currentQuestion = 0;
let answers = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Nothing to initialize on load
});

function startAssessment() {
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('assessment').classList.remove('hidden');
    currentQuestion = 0;
    answers = {};
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question">
            <span class="question-dimension">${question.dimension}</span>
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map(opt => `
                    <label class="option ${answers[question.id] === opt.value ? 'selected' : ''}" onclick="selectOption(${question.id}, ${opt.value})">
                        <input type="radio" name="q${question.id}" value="${opt.value}" 
                            ${answers[question.id] === opt.value ? 'checked' : ''}>
                        <span class="option-content">${opt.text}</span>
                        <span class="option-score">Level ${opt.value}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    updateProgress();
    updateNavigation();
}

function selectOption(questionId, value) {
    answers[questionId] = value;
    
    // Update UI
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.querySelector('input').value == value) {
            opt.classList.add('selected');
        }
    });
    
    updateNavigation();
    
    // Auto-advance after short delay
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        }
    }, 300);
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestion === 0;
    
    const currentQ = questions[currentQuestion];
    const hasAnswer = answers[currentQ.id] !== undefined;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.innerHTML = `
            Complete Assessment
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        nextBtn.disabled = !hasAnswer;
    } else {
        nextBtn.innerHTML = `
            Next
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        nextBtn.disabled = !hasAnswer;
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function nextQuestion() {
    const currentQ = questions[currentQuestion];
    if (answers[currentQ.id] === undefined) return;
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showEmailCapture();
    }
}

function showEmailCapture() {
    document.getElementById('assessment').classList.add('hidden');
    document.getElementById('emailCapture').classList.remove('hidden');
}

function submitEmail(event) {
    event.preventDefault();
    
    const lead = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        company: document.getElementById('companyName').value,
        companySize: document.getElementById('companySize').value,
        answers: answers,
        timestamp: new Date().toISOString()
    };
    
    // Store lead data (in production, send to backend)
    console.log('Lead captured:', lead);
    
    // Store in localStorage for demo
    const leads = JSON.parse(localStorage.getItem('gbs_leads') || '[]');
    leads.push(lead);
    localStorage.setItem('gbs_leads', JSON.stringify(leads));
    
    showResults();
}

function calculateResults() {
    const dimensions = {};
    
    // Group answers by dimension
    questions.forEach(q => {
        if (!dimensions[q.dimension]) {
            dimensions[q.dimension] = [];
        }
        if (answers[q.id]) {
            dimensions[q.dimension].push(answers[q.id]);
        }
    });
    
    // Calculate averages per dimension
    const dimensionScores = {};
    for (const [dim, scores] of Object.entries(dimensions)) {
        dimensionScores[dim] = scores.reduce((a, b) => a + b, 0) / scores.length;
    }
    
    // Calculate overall score
    const allScores = Object.values(dimensionScores);
    const overallScore = allScores.reduce((a, b) => a + b, 0) / allScores.length;
    
    return { dimensionScores, overallScore };
}

function getMaturityLevel(score) {
    if (score < 1.5) return { level: 1, name: 'Initial', class: 'level-1' };
    if (score < 2.5) return { level: 2, name: 'Developing', class: 'level-2' };
    if (score < 3.5) return { level: 3, name: 'Defined', class: 'level-3' };
    if (score < 4.5) return { level: 4, name: 'Advanced', class: 'level-4' };
    return { level: 5, name: 'World-Class', class: 'level-5' };
}

function showResults() {
    document.getElementById('emailCapture').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    const { dimensionScores, overallScore } = calculateResults();
    const maturity = getMaturityLevel(overallScore);
    
    // Animate overall score
    const scoreElement = document.getElementById('overallScore');
    const scoreCircle = document.getElementById('scoreCircle');
    animateValue(scoreElement, 0, overallScore, 1500);
    
    // Animate score circle
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (overallScore / 5) * circumference;
    setTimeout(() => {
        scoreCircle.style.strokeDashoffset = offset;
    }, 100);
    
    // Set maturity level
    const levelElement = document.getElementById('maturityLevel');
    levelElement.textContent = maturity.name;
    levelElement.className = `level-value ${maturity.class}`;
    
    // Render dimension breakdown
    renderDimensionBreakdown(dimensionScores);
    
    // Render radar chart
    renderRadarChart(dimensionScores);
    
    // Render benchmarks
    renderBenchmarks(dimensionScores);
    
    // Render recommendations
    renderRecommendations(dimensionScores);
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    let current = start;
    const increment = range / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = current.toFixed(1);
    }, 16);
}

function renderDimensionBreakdown(dimensionScores) {
    const container = document.getElementById('dimensionBreakdown');
    
    container.innerHTML = Object.entries(dimensionScores).map(([dim, score]) => `
        <div class="dimension-item">
            <span class="dimension-name">${dim}</span>
            <div class="dimension-score-bar">
                <div class="score-bar-container">
                    <div class="score-bar-fill" style="width: 0%;" data-target="${(score / 5) * 100}"></div>
                </div>
                <span class="dimension-score-value">${score.toFixed(1)}</span>
            </div>
        </div>
    `).join('');
    
    // Animate bars
    setTimeout(() => {
        container.querySelectorAll('.score-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.target + '%';
        });
    }, 200);
}

function renderRadarChart(dimensionScores) {
    const canvas = document.getElementById('radarChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const size = Math.min(canvas.parentElement.clientWidth - 48, 300);
    canvas.width = size;
    canvas.height = size;
    
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;
    
    const dimensions = Object.keys(dimensionScores);
    const scores = Object.values(dimensionScores);
    const benchmarks = dimensions.map(d => worldClassBenchmarks[d]);
    const numDimensions = dimensions.length;
    const angleStep = (2 * Math.PI) / numDimensions;
    
    // Clear canvas
    ctx.clearRect(0, 0, size, size);
    
    // Draw grid circles
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    // Draw grid lines
    for (let i = 0; i < numDimensions; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
        );
        ctx.stroke();
    }
    
    // Draw benchmark area
    ctx.beginPath();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    for (let i = 0; i < numDimensions; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const r = (benchmarks[i] / 5) * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw scores area
    ctx.beginPath();
    ctx.fillStyle = 'rgba(37, 99, 235, 0.2)';
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    for (let i = 0; i < numDimensions; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const r = (scores[i] / 5) * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw score points
    ctx.fillStyle = '#2563eb';
    for (let i = 0; i < numDimensions; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const r = (scores[i] / 5) * radius;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // Draw labels
    ctx.fillStyle = '#374151';
    ctx.font = '11px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < numDimensions; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const labelRadius = radius + 30;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);
        
        // Wrap long labels
        const words = dimensions[i].split(' ');
        if (words.length > 1) {
            ctx.fillText(words[0], x, y - 6);
            ctx.fillText(words.slice(1).join(' '), x, y + 8);
        } else {
            ctx.fillText(dimensions[i], x, y);
        }
    }
    
    // Draw legend
    ctx.font = '10px -apple-system, sans-serif';
    ctx.textAlign = 'left';
    
    // Your score
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(10, size - 30, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.fillText('Your Score', 26, size - 20);
    
    // World class
    ctx.fillStyle = '#10b981';
    ctx.fillRect(100, size - 30, 12, 12);
    ctx.fillStyle = '#374151';
    ctx.fillText('World Class', 116, size - 20);
}

function renderBenchmarks(dimensionScores) {
    const container = document.getElementById('benchmarkBars');
    
    container.innerHTML = Object.entries(dimensionScores).map(([dim, score]) => {
        const benchmark = worldClassBenchmarks[dim];
        const yourPercent = (score / 5) * 100;
        const benchmarkPercent = (benchmark / 5) * 100;
        
        return `
            <div class="benchmark-item">
                <span class="benchmark-label">${dim}</span>
                <div class="benchmark-bar-container">
                    <div class="benchmark-bar-you" style="width: 0%;" data-target="${yourPercent}">${score.toFixed(1)}</div>
                    <div class="benchmark-bar-world" style="left: ${benchmarkPercent}%;"></div>
                </div>
            </div>
        `;
    }).join('');
    
    // Animate bars
    setTimeout(() => {
        container.querySelectorAll('.benchmark-bar-you').forEach(bar => {
            bar.style.width = bar.dataset.target + '%';
        });
    }, 400);
}

function renderRecommendations(dimensionScores) {
    const container = document.getElementById('recommendations');
    
    // Find lowest scoring dimensions
    const sorted = Object.entries(dimensionScores).sort((a, b) => a[1] - b[1]);
    
    const recommendations = {
        'Governance': {
            title: 'Strengthen GBS Governance',
            text: 'Establish a formal GBS steering committee with executive sponsorship. Define clear accountability, decision rights, and performance metrics aligned to enterprise strategy.',
            priority: 'high'
        },
        'Process Standardization': {
            title: 'Accelerate Process Standardization',
            text: 'Implement global process ownership and a Center of Excellence. Prioritize end-to-end process mapping and deploy process mining tools to identify optimization opportunities.',
            priority: 'high'
        },
        'Technology & Digital': {
            title: 'Advance Digital Transformation',
            text: 'Develop a comprehensive automation roadmap including RPA and intelligent automation. Invest in modern cloud platforms and advanced analytics capabilities.',
            priority: 'high'
        },
        'Talent & Culture': {
            title: 'Invest in Talent Development',
            text: 'Create structured career paths and upskilling programs focused on digital capabilities. Build a strong employer brand and foster a culture of innovation and continuous improvement.',
            priority: 'medium'
        },
        'Service Delivery': {
            title: 'Enhance Service Delivery Model',
            text: 'Expand your service portfolio with value-added services. Implement omnichannel delivery with self-service capabilities and establish strategic partnerships with best-in-class providers.',
            priority: 'medium'
        }
    };
    
    // Show top 3 recommendations based on lowest scores
    const topRecs = sorted.slice(0, 3).map(([dim, score]) => {
        const rec = recommendations[dim];
        const gap = worldClassBenchmarks[dim] - score;
        const priority = gap > 2 ? 'high' : gap > 1 ? 'medium' : 'low';
        return { ...rec, dimension: dim, score, gap, priority };
    });
    
    container.innerHTML = topRecs.map(rec => `
        <div class="recommendation-card">
            <span class="recommendation-priority priority-${rec.priority}">${rec.priority} priority</span>
            <h4>${rec.title}</h4>
            <p>${rec.text}</p>
        </div>
    `).join('');
}

function requestConsultation() {
    const leads = JSON.parse(localStorage.getItem('gbs_leads') || '[]');
    const latestLead = leads[leads.length - 1];
    
    // In production, this would trigger an email or CRM integration
    alert(`Thank you for your interest! A consultant will contact ${latestLead?.name || 'you'} at ${latestLead?.email || 'the provided email'} within 24 hours.`);
}
