-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS holbie_talent_hub;
USE holbie_talent_hub;

-- Tabla "users" 
CREATE TABLE IF NOT EXISTS users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL, -- 'role in the company' 'recluter' or 'CTO' | 'role in the academy' 'students' or 'staff' -> FOREING KEY 
  created_at DATETIME,
  updated_at DATETIME,
  company_id INT NULL,
  profesional_id INT NULL,
  UNIQUE KEY (email),
  FOREIGN KEY (company_id) REFERENCES companies(profile_id),
  FOREIGN KEY (profesional_id) REFERENCES (profile_id)
);

-- Tabla "contacts"
CREATE TABLE IF NOT EXISTS contacts (
  contact_id INT PRIMARY KEY AUTO_INCREMENT,
  contact_type VARCHAR(50),
  contact_info VARCHAR(100),
  created_at DATETIME,
  updated_at DATETIME,
  profile_id INT NULL,
  company_id INT NULL,
  project_id INT NULL,
  FOREIGN KEY (profile_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (company_id) REFERENCES company_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
  --CONSTRAINT CHK_contact_type CHECK (contact_type IN ('linkedin', 'phone', 'email', 'github', 'instagram', 'tiktok', 'torre', 'other-one'))
);

-- Tabla "multimedia"
CREATE TABLE IF NOT EXISTS multimedia (
  media_id INT PRIMARY KEY AUTO_INCREMENT,
  media_type VARCHAR(255),
  file_path VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME
  profile_id INT NULL,
  education_id INT NULL,
  project_id INT NULL,

  FOREIGN KEY (profile_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (education_id) REFERENCES education(education_id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
);

-- Tabla "skills"
CREATE TABLE IF NOT EXISTS skills (
  skill_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  description TEXT,
  created_at DATETIME,
  updated_at DATETIME
);

-- Tabla "education"
CREATE TABLE IF NOT EXISTS education (
  education_id INT PRIMARY KEY AUTO_INCREMENT,
  profile_id INT,
  institution VARCHAR(255),
  degree VARCHAR(255),
  field_of_study VARCHAR(255),
  start_date DATE,
  end_date DATE,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (profile_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE
);

-- Tabla "experience"
CREATE TABLE IF NOT EXISTS experience (
  experience_id INT PRIMARY KEY AUTO_INCREMENT,
  profile_id INT,
  company_name VARCHAR(255),
  position VARCHAR(255),
  description TEXT,
  start_date DATE,
  end_date DATE,
  created_at DATETIME,
  updated_at DATETIME
  FOREIGN KEY (profile_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE,
);

-- Tabla "projects"
CREATE TABLE IF NOT EXISTS projects (
  project_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  repository VARCHAR(255),
  website VARCHAR(255),
  start_date DATE,
  end_date DATE,
  created_at DATETIME,
  updated_at DATETIME
);

-- Tabla "company_profiles"
CREATE TABLE IF NOT EXISTS company_profiles (
  profile_id INT PRIMARY KEY AUTO_INCREMENT,
  company_name VARCHAR(255),
  industry VARCHAR(255),
  about_us TEXT,
  location VARCHAR(255),
  website VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME,
);

-- Tabla "professional_profiles"
CREATE TABLE IF NOT EXISTS professional_profiles (
  profile_id INT PRIMARY KEY AUTO_INCREMENT,
  is_user BOOLEAN NOT NULL DEFAULT TRUE,
  headline VARCHAR(255),
  about_me TEXT,
  location VARCHAR(255),
  kind_job VARCHAR(255), -- "REMOTE" or "ONSITE" or "BOTH"
  job_type VARCHAR(255), -- "FULL_TIME" or "PART_TIME" or "INTERNSHIP" or "CONTRACT" or "VOLUNTEER" or "OTHER" - split this in ","
  salary_min INT,
  salary_max INT,
  created_at DATETIME,
  updated_at DATETIME,
);

-- Tabla "applications"
CREATE TABLE IF NOT EXISTS applications (
  application_id INT PRIMARY KEY AUTO_INCREMENT,
  company_id INT,
  professional_id INT,
  status VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (company_id) REFERENCES company_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (professional_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE
);

-- Tabla "ratings"
CREATE TABLE IF NOT EXISTS ratings (
  rating_id INT PRIMARY KEY AUTO_INCREMENT,
  professional_id INT,
  company_id INT NULL,
  professional_other_id INT NULL,
  rating INT,
  comment TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (professional_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (professional_other_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (company_id) REFERENCES company_profiles(profile_id) ON DELETE CASCADE
);

-- Tabla "messages"
CREATE TABLE IF NOT EXISTS messages (
  message_id INT PRIMARY KEY AUTO_INCREMENT,
  sender_id INT,
  receiver_id INT,
  subject VARCHAR(255),
  content TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  FOREIGN KEY (sender_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (receiver_id) REFERENCES users(user_id) ON DELETE CASCADE
);



-- Tabla "professional_skills"
CREATE TABLE IF NOT EXISTS professional_skills (
  profile_id INT,
  skill_id INT,
  proficiency_level INT,
  FOREIGN KEY (profile_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (skill_id) REFERENCES skills(skill_id) ON DELETE CASCADE
);


-- Tabla "project_skills"
CREATE TABLE IF NOT EXISTS project_skills (
  project_id INT,
  skill_id INT,
  proficiency_level INT,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
  FOREIGN KEY (skill_id) REFERENCES skills(skill_id) ON DELETE CASCADE
);

-- Tabla "filters_professional"
CREATE TABLE IF NOT EXISTS filters_professional (
  company_id INT,
  profile_id INT,
  rating INT,
  FOREIGN KEY (company_id) REFERENCES company_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (profile_id) REFERENCES professional_profiles(profile_id) ON DELETE CASCADE -- no es un usuario, es un perfil ideal de filtro
);

-- Tabla "company_capstone_projects"
CREATE TABLE IF NOT EXISTS company_capstone_projects (
  company_id INT,
  project_id INT,
  kind TEXT,
  active BOOLEAN,
  FOREIGN KEY (company_id) REFERENCES company_profiles(profile_id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);

