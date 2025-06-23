import { useState } from 'react'

function Skills() {
  const [openSkills, setOpenSkills] = useState({})

  const toggleSkill = (skillId) => {
    setOpenSkills(prev => ({
      ...prev,
      [skillId]: !prev[skillId]
    }))
  }

  const skills = [
    {
      id: 'java',
      name: 'Java',
      code: `public void updateColor(int var1, int var2, Object var3, int var4) {
    while(!Thread.currentThread().isInterrupted()) {
        try {
            Thread.sleep(MyRandom.getSpeed((double)var4));
        } catch (InterruptedException var13) {
            Thread.currentThread().interrupt();
            return;
        }

        synchronized(var3) {
            if (MyRandom.getProbability(var5)) {
                this.setColor(MyUtils.getRandomColor());
            } else {
                this.setColor(MyUtils.getNeighbourColor(this));
            }

            MyGUIUtils.setNewColor(this);
            System.out.println("Start: " + (var1 * var9 + var2));
            System.out.println("End: " + (var1 * var9 + var2));
        }
    }
}`
    },
    {
      id: 'cpp',
      name: 'C/C++',
      code: `std::vector<int> merge_sort(int n, std::vector<int> array);
std::vector<int> merge(std::vector<int> sorted_array1, std::vector<int> sorted_array2);

std::vector<int> merge_sort (int n, std::vector<int> array){
    int size = n;

    if (size <= 1){
        return array;
    }

    int mid = size/2;
    std::vector<int> left_array(array.begin(), array.begin() + mid);
    std::vector<int> right_array(array.begin() + mid, array.end());

    return merge(merge_sort(left_array.size(), left_array), 
                merge_sort(right_array.size(), right_array));
}`
    },
    {
      id: 'python',
      name: 'Python',
      code: `def fit_with_one_neuron_in_layer_with_activation_neural_net(input, label, N=10000, alpha=0.0001):
    w = np.random.normal(size=(2,), loc=0.1, scale=0.1)
    b = np.random.normal(size=(1,), loc=0.1, scale=0.1)
    output = np.zeros(len(input))
    error = np.zeros(len(input))
    loss = []
    w_list = []
    
    for i in range(N):
        j = np.random.randint(len(input))
        Z = sigmoid(np.dot(input, w) + b)
        error = np.mean((label - Z)**2)
        
        derror_dZ = 2.0 * (label[j] - Z[j])
        dZ_dw = input[j] * sigmoid_derivative(Z[j])
        
        w = w + alpha * derror_dZ * dZ_dw
        b = b + alpha * derror_dZ
        
        if i % 1000 == 0:
            print("iteration: ", i, "loss: ", error)
            w_list.append(w.copy())
            loss.append(error)
    
    return Z, loss, w_list`
    },
    {
      id: 'web',
      name: 'HTML/CSS/JavaScript/React',
      code: `document.querySelectorAll('.skill-toggle').forEach(toggle => {
    toggle.addEventListener('change', function () {
        const codeBlock = this.nextElementSibling.nextElementSibling;
        if (this.checked) {
            codeBlock.style.display = 'block';
        } else {
            codeBlock.style.display = 'none';
        }
    });
});`
    }
  ]

  return (
    <section id="skills" className="mt-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Skills</h2>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.id}>
            <button
              onClick={() => toggleSkill(skill.id)}
              className="text-lg font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              {skill.name}
            </button>
            {openSkills[skill.id] && (
              <div className="skill-code mt-4">
                <pre className="text-sm overflow-x-auto">
                  <code>{skill.code}</code>
                </pre>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills